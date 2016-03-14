export class ArcItem {
  name: string;
  description: string;
  resourceUrl: string;
  imageUrl: string;
  id: number;
  tag: string;

  constructor(id: number, name: string, description: string, resourceUrl: string, tag: string, imageUrl?: string) {
    this.name = name;
    this.description = description;
    this.resourceUrl = resourceUrl;
    this.imageUrl = imageUrl;
    this.id = id;
    this.tag = tag;
  }
}
