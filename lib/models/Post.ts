
import { OstModel, OstProps } from "./Ost";

export interface PostProps extends OstProps {
    category: string

}
export class PostModel extends OstModel<PostProps> {
    constructor(props: PostProps) {
        super(props)
    }

    getCategory(): string {
        return this.props.category || ''
    }

}