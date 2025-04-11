import { Beacon, Category, ObjectItem } from "@/utils/types";
import { categories, objects } from "../../server/data";

export async function getObjects(): Promise<ObjectItem[]> {
  try {
    return objects;
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getObjectById(id: string): Promise<ObjectItem> {
  try {
    const object = objects.find(obj => obj.id === id);
    if (!object) {
      throw new Error(`Object with ID ${id} not found`);
    }
    return object;
  } catch (error) {
    console.error(`Error fetching object with ID ${id}:`, error);
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function createCategory(
  newCategory: Partial<Category>
): Promise<Category | null> {
  try {
    if (!newCategory.id || !newCategory.name) {
      throw new Error("Category must have an id and a name");
    }
    const category: Category = { id: newCategory.id, name: newCategory.name };
    categories.push(category);
    return category;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}

export async function deleteCategory(id: string): Promise<void> {
  try {
    const index = categories.findIndex(category => category.id === id);
    if (index === -1) {
      throw new Error(`Category with ID ${id} not found`);
    }
    categories.splice(index, 1);
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
}

export async function updateObject(
  id: string,
  updatedData: Partial<ObjectItem>
): Promise<ObjectItem | null> {
  try {
    const object = objects.find(obj => obj.id === id);
    if (!object) {
      throw new Error(`Object with ID ${id} not found`);
    }
    Object.assign(object, updatedData);
    return object;
  } catch (error) {
    console.error(`Error updating object with ID ${id}:`, error);
    throw error;
  }
}

export async function updateCategory(
  id: string,
  updatedData: Partial<Category>
): Promise<Category | null> {
  try {
    const category = categories.find(cat => cat.id === id);
    if (!category) {
      throw new Error(`Category with ID ${id} not found`);
    }
    Object.assign(category, updatedData);
    return category;
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    throw error;
  }
}

export async function getBeacon(): Promise<Beacon[]> {
  try {
    // Assuming beacons data
    const beacons: Beacon[] = [];
    return beacons;
  } catch (error) {
    console.error("Error fetching beacons:", error);
    throw error;
  }
}
