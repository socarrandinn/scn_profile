import { EntityApiService, ApiClientService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { config } from 'process';

interface ILogisticProvider {
    "name": "string",
    "code": "string",
    "active": true,
    "avatar": {
        "thumb": "string",
        "url": "string",
        "width": 0,
        "height": 0
    },
    "contacts": {
        "phones": [
            {
                "label": "string",
                "principal": true,
                "value": "string"
            }
        ],
        "emails": [
            {
                "label": "string",
                "principal": true,
                "value": "string"
            }
        ]
    },
    "address": {
        "address": "string",
        "municipality": "string",
        "state": "string",
        "country": "string",
        "zipCode": "string",
        "location": {
            "coordinates": [
                -73.9667,
                40.78
            ]
        }
    },
    "commission": 0
}

class LogisticProvidersService extends EntityApiService<ILogisticProvider> { }

export default new LogisticProvidersService('/ms-inventory/api/logistic-provider');
