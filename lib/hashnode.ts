interface Query {
	query: string;
	variables?: object;
	tags?: Array<string>;
}

export async function query<T>({ query, variables, tags }: Query): Promise<T> {
	const data = await fetch("https://gql.hashnode.com", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		next: {
			tags,
		},
	}).then((r) => r.json());
	return data;
}
