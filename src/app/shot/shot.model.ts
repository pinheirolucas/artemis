export interface Shot {
	id: number;
	title: string;
	description: string;
	width: number;
	height: number;
	images: Images;
	views_count: number;
	likes_count: number;
	comments_count: number;
	created_at: string;
	user: User;
}

export interface Images {
	hidpi: string;
	normal: string;
	teaser: string;
}

export interface User {
	name: string;
	avatar_url: string;
}
