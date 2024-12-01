import { OstDocument } from "outstatic";

export interface OstProps extends OstDocument {
}


export class AuthorModel {
    constructor(private props: OstProps['author']) {
    }

    getName(): string {
        return this.props?.name || ''
    }
    getPicture(): string {
        return this.props?.picture || ''
    }

}


export class OstModel<T extends OstProps> {
    constructor(protected props: T) {
    }
    getTitle(): string {
        return this.props.title || ''
    }
    getStatus(): string {
        return this.props.status || ''
    }
    getSlug(): string {
        return this.props.slug || ''
    }
    getPublishedAt(): string {
        return this.props.publishedAt || ''
    }
    getDescription(): string {
        return this.props.description || ''
    }
    getCoverImage(): string {
        return this.props.coverImage || ''
    }
    getContent(): string {
        return this.props.content || ''
    }
    getCollection(): string {
        return this.props.collection || ''
    }
    getAuthor(): AuthorModel {
        return new AuthorModel(this.props.author)
    }
}


