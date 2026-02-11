import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    price : Float;
    categoryId : Nat;
  };

  type MenuCategory = {
    id : Nat;
    name : Text;
    itemIds : [Nat];
  };

  type MenuData = {
    items : [MenuItem];
    categories : [MenuCategory];
  };

  public type UserProfile = {
    name : Text;
  };

  let menuItems = Map.empty<Nat, MenuItem>();
  let categories = Map.empty<Nat, MenuCategory>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  var nextMenuItemId = 1;
  var nextCategoryId = 1;

  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Menu Management Functions
  public shared ({ caller }) func updateMenu(menuData : MenuData) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update the menu");
    };

    menuItems.clear();
    categories.clear();

    var localNextMenuItemId = 1;
    var localNextCategoryId = 1;

    for (item in menuData.items.values()) {
      menuItems.add(localNextMenuItemId, {
        id = localNextMenuItemId;
        name = item.name;
        description = item.description;
        price = item.price;
        categoryId = item.categoryId;
      });
      localNextMenuItemId += 1;
    };

    for (category in menuData.categories.values()) {
      categories.add(localNextCategoryId, {
        id = localNextCategoryId;
        name = category.name;
        itemIds = category.itemIds;
      });
      localNextCategoryId += 1;
    };

    nextMenuItemId := localNextMenuItemId;
    nextCategoryId := localNextCategoryId;
  };

  public query ({ caller }) func getMenu() : async MenuData {
    // Public access - no authorization check needed (accessible to all including guests)
    let items = menuItems.values().toArray();
    let cats = categories.values().toArray();
    {
      items;
      categories = cats;
    };
  };

  public shared ({ caller }) func addMenuItem(item : MenuItem) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add menu items");
    };

    let newItem = { item with id = nextMenuItemId };
    menuItems.add(nextMenuItemId, newItem);

    nextMenuItemId += 1;
    newItem.id;
  };

  public shared ({ caller }) func updateMenuItem(id : Nat, item : MenuItem) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update menu items");
    };

    menuItems.add(id, { item with id });
  };

  public shared ({ caller }) func deleteMenuItem(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete menu items");
    };

    menuItems.remove(id);
  };

  public shared ({ caller }) func addCategory(name : Text, itemIds : [Nat]) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add categories");
    };

    let newCategory = {
      id = nextCategoryId;
      name;
      itemIds;
    };

    categories.add(nextCategoryId, newCategory);
    nextCategoryId += 1;
    newCategory.id;
  };

  public shared ({ caller }) func updateCategory(id : Nat, name : Text, itemIds : [Nat]) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update categories");
    };

    let updatedCategory = {
      id;
      name;
      itemIds;
    };

    categories.add(id, updatedCategory);
  };

  public shared ({ caller }) func deleteCategory(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete categories");
    };

    categories.remove(id);
  };
};
