import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "xa55zmxu",
    dataset: "production",
    title: "Next With Cms",
    apiVersion: "2023-06-08",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas},
}); 

export default config