export interface Root {
	data: Data;
}

export interface Data {
	publication: Publication;
}

export interface Publication {
	title: string;
	posts: Posts;
}

export interface Posts {
	edges: Edge[];
}

export interface Edge {
	node: Post;
}

export interface Post {
	id: string;
	title: string;
	views: number;
	coverImage: CoverImage;
	publishedAt: string;
	author: {
		profilePicture: string;
		username: string;
		name: string;
	};
}

export interface CoverImage {
	url: string;
}
