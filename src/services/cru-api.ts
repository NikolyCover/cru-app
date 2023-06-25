import axios from 'axios'

export const cruAPI = axios.create({
	baseURL: 'http://192.168.100.209:3000',
	headers: {
		'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
	},
})
