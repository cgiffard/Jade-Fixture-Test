@all {

	h1 {
		text: /this is a test title/i longer-than(5);
	}

	article {
		required: true;

		article header {
			required: true;
			count: 1;
		}

		/*@ The article body */
		article section {
			required: true;
			/*@ Has an appropriate class */
			attribute(class): required "sdf";
		}
	}

	section.body {
		/*@ The article paragraphs */
		$node p {
			/*@ There must be six generated from the fixture */
			count: 6;
			/*@ Must have text content longer than 20 characters */
			text: longer-than(20);
		}
	}
}