import React, { useState, useEffect } from 'react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useIsCallerAdmin, useGetMenu, useUpdateMenu, useGetCallerUserProfile, useSaveCallerUserProfile } from '@/hooks/useQueries';
import { menuCategories, MenuCategory } from '@/data/menuData';
import { toBackendMenuData, mergeMenuData } from '@/lib/menuAdapters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Save, RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function MenuManagementPage() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const saveProfileMutation = useSaveCallerUserProfile();
  const { data: isAdmin, isLoading: adminLoading } = useIsCallerAdmin();
  const { data: backendMenu, isLoading: menuLoading } = useGetMenu();
  const updateMenuMutation = useUpdateMenu();

  const [editedCategories, setEditedCategories] = useState<MenuCategory[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [showProfileSetup, setShowProfileSetup] = useState(false);

  const isAuthenticated = !!identity;
  const isLoading = profileLoading || adminLoading || menuLoading;

  // Initialize edited categories from backend or default data
  useEffect(() => {
    if (backendMenu) {
      const merged = mergeMenuData(backendMenu);
      setEditedCategories(merged);
    } else if (!menuLoading) {
      setEditedCategories(menuCategories);
    }
  }, [backendMenu, menuLoading]);

  // Check if profile setup is needed
  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, profileLoading, isFetched, userProfile]);

  const handleProfileSetup = async () => {
    if (!profileName.trim()) return;
    try {
      await saveProfileMutation.mutateAsync({ name: profileName.trim() });
      setShowProfileSetup(false);
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    await clear();
    setEditedCategories(menuCategories);
    setHasChanges(false);
  };

  const handleCategoryChange = (categoryId: string, field: keyof MenuCategory, value: any) => {
    setEditedCategories((prev) =>
      prev.map((cat) => (cat.id === categoryId ? { ...cat, [field]: value } : cat))
    );
    setHasChanges(true);
  };

  const handleItemChange = (categoryId: string, itemIndex: number, field: string, value: any) => {
    setEditedCategories((prev) =>
      prev.map((cat) => {
        if (cat.id === categoryId) {
          const newItems = [...cat.items];
          newItems[itemIndex] = { ...newItems[itemIndex], [field]: value };
          return { ...cat, items: newItems };
        }
        return cat;
      })
    );
    setHasChanges(true);
  };

  const handleSave = async () => {
    try {
      const backendData = toBackendMenuData(editedCategories);
      await updateMenuMutation.mutateAsync(backendData);
      setHasChanges(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save menu:', error);
    }
  };

  const handleReset = () => {
    if (backendMenu) {
      const merged = mergeMenuData(backendMenu);
      setEditedCategories(merged);
    } else {
      setEditedCategories(menuCategories);
    }
    setHasChanges(false);
  };

  // Profile setup modal
  if (showProfileSetup) {
    return (
      <Dialog open={showProfileSetup} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Welcome! Set up your profile</DialogTitle>
            <DialogDescription className="text-sm">Please enter your name to continue.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="profile-name" className="text-sm">Your Name</Label>
              <Input
                id="profile-name"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Enter your name"
                disabled={saveProfileMutation.isPending}
                className="text-sm"
              />
            </div>
            <Button
              onClick={handleProfileSetup}
              disabled={!profileName.trim() || saveProfileMutation.isPending}
              className="w-full text-sm"
            >
              {saveProfileMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Login required
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="max-w-md mx-auto">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Menu Management</CardTitle>
            <CardDescription className="text-sm">Please log in to manage the menu</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <Button onClick={handleLogin} disabled={loginStatus === 'logging-in'} className="w-full text-sm sm:text-base">
              {loginStatus === 'logging-in' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  // Access denied
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="max-w-md mx-auto border-destructive">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-destructive text-lg sm:text-xl">
              <AlertCircle className="h-5 w-5" />
              Access Denied
            </CardTitle>
            <CardDescription className="text-sm">You do not have permission to access this page.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <Button onClick={handleLogout} variant="outline" className="w-full text-sm sm:text-base">
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Menu Management</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Edit categories and menu items</p>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm" className="self-start sm:self-auto">
            Logout
          </Button>
        </div>

        {saveSuccess && (
          <Alert className="border-primary bg-primary/10 mb-4">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">Menu saved successfully!</AlertDescription>
          </Alert>
        )}

        {updateMenuMutation.isError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">Failed to save menu. Please try again.</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button
            onClick={handleSave}
            disabled={!hasChanges || updateMenuMutation.isPending}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            {updateMenuMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            disabled={!hasChanges}
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <Tabs defaultValue={editedCategories[0]?.id} className="w-full">
        <TabsList className="w-full flex-wrap h-auto gap-2 bg-muted/50 p-2">
          {editedCategories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {editedCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4 sm:mt-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Edit {category.name}</CardTitle>
                <CardDescription className="text-sm">Update category details and menu items</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-6">
                {/* Category Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg">Category Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`cat-name-${category.id}`} className="text-sm">Category Name</Label>
                      <Input
                        id={`cat-name-${category.id}`}
                        value={category.name}
                        onChange={(e) => handleCategoryChange(category.id, 'name', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`cat-icon-${category.id}`} className="text-sm">Icon Key</Label>
                      <Input
                        id={`cat-icon-${category.id}`}
                        value={category.iconKey}
                        onChange={(e) => handleCategoryChange(category.id, 'iconKey', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`cat-desc-${category.id}`} className="text-sm">Description</Label>
                    <Textarea
                      id={`cat-desc-${category.id}`}
                      value={category.description}
                      onChange={(e) => handleCategoryChange(category.id, 'description', e.target.value)}
                      rows={2}
                      className="text-sm"
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg">Menu Items ({category.items.length})</h3>
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <Card key={index} className="border-2">
                        <CardContent className="p-3 sm:p-4">
                          <div className="grid gap-3 sm:gap-4">
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor={`item-name-${category.id}-${index}`} className="text-xs sm:text-sm">Item Name</Label>
                                <Input
                                  id={`item-name-${category.id}-${index}`}
                                  value={item.name}
                                  onChange={(e) => handleItemChange(category.id, index, 'name', e.target.value)}
                                  className="text-sm"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`item-price-${category.id}-${index}`} className="text-xs sm:text-sm">Price (₹)</Label>
                                <Input
                                  id={`item-price-${category.id}-${index}`}
                                  type="number"
                                  value={item.price}
                                  onChange={(e) => handleItemChange(category.id, index, 'price', parseFloat(e.target.value) || 0)}
                                  className="text-sm"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`item-desc-${category.id}-${index}`} className="text-xs sm:text-sm">Description</Label>
                              <Textarea
                                id={`item-desc-${category.id}-${index}`}
                                value={item.description}
                                onChange={(e) => handleItemChange(category.id, index, 'description', e.target.value)}
                                rows={2}
                                className="text-sm"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
