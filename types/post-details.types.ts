export interface PostDetails {
	data: Data;
}

export interface Data {
	publication: Publication;
}

export interface Publication {
	title: string;
	post: Post;
}

export interface Post {
	id: string;
	slug: string;
	title: string;
	author: Author;
	coverImage: CoverImage;
	views: number;
	content: Content;
	publishedAt: string;
}

export interface Author {
	username: string;
	name: string;
	profilePicture: string;
}

export interface CoverImage {
	url: string;
}

export interface Content {
	html: string;
}
