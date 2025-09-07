import type { projectShowcaseImage } from "./projectShowcaseImage";

export interface projectPageData {
    title: string;
    mainImageURL: string;
    mainImageAltText: string;
    description: string;
    skillArray: string[];
    websiteURL: string;
    gitRepoURL: string;
    showcaseImages: projectShowcaseImage[];
}