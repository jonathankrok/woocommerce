import axios, { AxiosInstance } from 'axios';
import moxios from 'moxios';
import { AxiosAPIService } from './axios-api-service';

describe( 'AxiosAPIService', () => {
	let apiClient: AxiosAPIService;

	beforeEach( () => {
		moxios.install();
		apiClient = new AxiosAPIService(
			'https://test.test/wp-json/',
			'consumer_key',
			'consumer_secret'
		);
	} );

	afterEach( () => {
		moxios.uninstall();
	} );

	it( 'should transform responses into APIResponse', async () => {
		moxios.stubOnce( 'GET', '/wc/v2/product', {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			responseText: JSON.stringify( { test: 'value' } ),
		} );

		const response = await apiClient.request( 'GET', '/wc/v2/product' );

		expect( response ).toMatchObject( {
			status: 200,
			headers: {
				'content-type': 'application/json',
			},
			data: {
				test: 'value',
			},
		} );
	} );
} );
