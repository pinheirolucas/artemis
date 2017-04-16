export interface Shot {
	id: number;
	title: string;
	description: string;
	width: number;
	height: number;
	images: Images;
	likes_count: number;
	created_at: string;
}

export interface Images {
	hidpi: string;
	normal: string;
	teaser: string;
}
