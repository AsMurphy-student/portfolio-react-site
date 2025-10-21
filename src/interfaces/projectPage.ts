import type { ProjectPreview } from "./projectPreview";
import type { ProjectShowcaseImage } from "./projectShowcaseImage";

export interface ProjectPageData {
    previewData: ProjectPreview;
    title: string;
    mainImageURL: string;
    mainImageAltText: string;
    description: string;
    skillArray: string[];
    websiteURL?: string;
    gitRepoURL: string;
    showcaseImages: ProjectShowcaseImage[];
}