import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    id: bigint;
    categoryId: bigint;
    name: string;
    description: string;
    price: number;
}
export interface MenuData {
    categories: Array<MenuCategory>;
    items: Array<MenuItem>;
}
export interface MenuCategory {
    id: bigint;
    name: string;
    itemIds: Array<bigint>;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addCategory(name: string, itemIds: Array<bigint>): Promise<bigint>;
    addMenuItem(item: MenuItem): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteCategory(id: bigint): Promise<void>;
    deleteMenuItem(id: bigint): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getMenu(): Promise<MenuData>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updateCategory(id: bigint, name: string, itemIds: Array<bigint>): Promise<void>;
    updateMenu(menuData: MenuData): Promise<void>;
    updateMenuItem(id: bigint, item: MenuItem): Promise<void>;
}
