export interface TimelineItem {
	id: string;
	name: {
		first: string;
		last: string;
	};
	about: string;
	registered: string;
	tags: string[];
}
