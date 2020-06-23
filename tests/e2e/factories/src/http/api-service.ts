/**
 * A structured response from the API.
 */
export interface APIResponse< T > {
	status: number;
	headers: any;
	data: T;
}

/**
 * A structured error from the API.
 */
export interface APIError< T > {
	response?: APIResponse< T >;
	message?: string;
}

/**
 * An interface for implementing services to make calls against the API.
 */
export interface APIService {
	/**
	 * Performs a GET request against the WordPress API.
	 *
	 * @param {string} endpoint The API endpoint we should query.
	 * @param {*}      params Any parameters that should be passed in the request.
	 * @return {Promise} Resolves to an APIResponse and rejects an APIError.
	 */
	get< T >(
		endpoint: string,
		params?: any
	): Promise< APIResponse< T > | APIError< T > >;

	/**
	 * Performs a POST request against the WordPress API.
	 *
	 * @param {string} endpoint The API endpoint we should query.
	 * @param {*}      data Any parameters that should be passed in the request.
	 * @return {Promise} Resolves to an APIResponse and rejects an APIError.
	 */
	post< T >(
		endpoint: string,
		data?: any
	): Promise< APIResponse< T > | APIError< T > >;

	/**
	 * Performs a PUT request against the WordPress API.
	 *
	 * @param {string} endpoint The API endpoint we should query.
	 * @param {*}      data Any parameters that should be passed in the request.
	 * @return {Promise} Resolves to an APIResponse and rejects an APIError.
	 */
	put< T >(
		endpoint: string,
		data?: any
	): Promise< APIResponse< T > | APIError< T > >;

	/**
	 * Performs a PATCH request against the WordPress API.
	 *
	 * @param {string} endpoint The API endpoint we should query.
	 * @param {*}      data Any parameters that should be passed in the request.
	 * @return {Promise} Resolves to an APIResponse and rejects an APIError.
	 */
	patch< T >(
		endpoint: string,
		data?: any
	): Promise< APIResponse< T > | APIError< T > >;

	/**
	 * Performs a DELETE request against the WordPress API.
	 *
	 * @param {string} endpoint The API endpoint we should query.
	 * @param {*}      params Any parameters that should be passed in the request.
	 * @return {Promise} Resolves to an APIResponse and rejects an APIError.
	 */
	delete< T >(
		endpoint: string,
		data?: any
	): Promise< APIResponse< T > | APIError< T > >;
}
