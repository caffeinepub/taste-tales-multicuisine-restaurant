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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome! Set up your profile</DialogTitle>
            <DialogDescription>Please enter your name to continue.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="profile-name">Your Name</Label>
              <Input
                id="profile-name"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Enter your name"
                disabled={saveProfileMutation.isPending}
              />
            </div>
            <Button
              onClick={handleProfileSetup}
              disabled={!profileName.trim() || saveProfileMutation.isPending}
              className="w-full"
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
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Menu Management</CardTitle>
            <CardDescription>Please log in to manage the menu</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleLogin} disabled={loginStatus === 'logging-in'} className="w-full">
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
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Access denied
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            You do not have permission to access this page. Only administrators can manage the menu.
          </AlertDescription>
        </Alert>
        <div className="text-center mt-4">
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">Menu Management</h1>
          <p className="text-muted-foreground mt-1">Edit menu categories, items, and prices</p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">Menu saved successfully!</AlertDescription>
        </Alert>
      )}

      <div className="flex gap-4 mb-6">
        <Button onClick={handleSave} disabled={!hasChanges || updateMenuMutation.isPending}>
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
        <Button onClick={handleReset} variant="outline" disabled={!hasChanges}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      <Tabs defaultValue={editedCategories[0]?.id} className="space-y-4">
        <TabsList className="flex flex-wrap h-auto gap-2">
          {editedCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {editedCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardHeader>
                <CardTitle>Edit {category.name}</CardTitle>
                <CardDescription>Update category details and menu items</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Details */}
                <div className="space-y-4 pb-6 border-b">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`cat-name-${category.id}`}>Category Name</Label>
                      <Input
                        id={`cat-name-${category.id}`}
                        value={category.name}
                        onChange={(e) => handleCategoryChange(category.id, 'name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`cat-order-${category.id}`}>Display Order</Label>
                      <Input
                        id={`cat-order-${category.id}`}
                        type="number"
                        value={category.order}
                        onChange={(e) => handleCategoryChange(category.id, 'order', parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`cat-desc-${category.id}`}>Category Description</Label>
                    <Textarea
                      id={`cat-desc-${category.id}`}
                      value={category.description}
                      onChange={(e) => handleCategoryChange(category.id, 'description', e.target.value)}
                      rows={2}
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Menu Items</h3>
                  {category.items.map((item, index) => (
                    <Card key={index} className="bg-muted/30">
                      <CardContent className="pt-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor={`item-name-${category.id}-${index}`}>Item Name</Label>
                            <Input
                              id={`item-name-${category.id}-${index}`}
                              value={item.name}
                              onChange={(e) => handleItemChange(category.id, index, 'name', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor={`item-price-${category.id}-${index}`}>Price (₹)</Label>
                            <Input
                              id={`item-price-${category.id}-${index}`}
                              type="number"
                              value={item.price}
                              onChange={(e) => handleItemChange(category.id, index, 'price', parseFloat(e.target.value))}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`item-desc-${category.id}-${index}`}>Description (optional)</Label>
                          <Textarea
                            id={`item-desc-${category.id}-${index}`}
                            value={item.description || ''}
                            onChange={(e) => handleItemChange(category.id, index, 'description', e.target.value)}
                            rows={2}
                            placeholder="Add a description for this item"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
