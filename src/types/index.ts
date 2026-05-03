export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  previewType: "image" | "ui-animation";
  cover?: string;
  video?: string;
  media?: ProjectMedia[];
};

export type ProjectMedia = {
  title: string;
  src: string;
  type: "image" | "video";
};
