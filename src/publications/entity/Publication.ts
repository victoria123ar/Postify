import { randomUUID } from "crypto";

export class Publication {
    constructor(
      private _image: string,
      private _title: string,
      private _text: string,
      private _dateToPublish: string,
      private _published: string,
      private _socialMedia: string,
      private readonly id: string = randomUUID(),
    ) {}

    public get image(): string {
        return this._image;
    }
    public set image(image: string) {
        this._image = image;
    }

    public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }

    public get text(): string {
        return this._text;
    }
    public set text(text: string) {
        this._text = text;
    }

    public get dateToPublish(): string {
        return this._dateToPublish;
    }
    public set dateToPublish(dateToPublish: string) {
        this._dateToPublish = dateToPublish;
    }

    public get published(): string {
        return this._published;
    }
    public set published(published: string) {
        this._published = published;
    }

    public get socialMedia(): string {
        return this._socialMedia;
    }
    public set socialMedia(socialMedia: string) {
        this._socialMedia = socialMedia;
    }
}