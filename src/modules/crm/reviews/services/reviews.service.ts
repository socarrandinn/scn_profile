import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IReviews } from 'modules/crm/reviews/interfaces';

class AdminReviewsService extends EntityApiService<IReviews> {
  searchByEntity = (params: any, config?: any) => {
    const { entityId } = params;
    return this.handleResponse(ApiClientService.post(this.getPath(`/${entityId as string}/search`), params, config));
  };

  updateStatus = (reviewId: string, params: { status: string; cause: string | undefined }, config?: any) => {
    return this.handleResponse(
      ApiClientService.put(
        this.getPath(`/${reviewId}/status`),
        {
          status: params?.status,
          ...(params?.cause ? { cause: params?.cause } : {}),
        },
        config,
      ),
    );
  };

  searchReportByReviewId = (reviewId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${reviewId}/reports/search`), params, config));
  };

  getOne = (id: string, config?: RequestConfig | undefined) => {
    return getReviewData(reviewObj);
  };

  // get report causes
  searchReportCause = (params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath('/report-cause'), params, config));
  };
}

export default new AdminReviewsService('/ms-inventory/api/admin/reviews');

const getReviewData = async (data: any) => {
  return data;
};

const reviewObj = {
  _id: '6612aacfa46cda74979e1d9a',
  entity: '6602fb715e63cf4b576cbed2',
  owner: '65fb2a938cbf22158e042b8f',
  space: '65e9e6ec107f306bb3f00160',
  __v: 0,
  comment:
    'Lorem ipsum dolor sit amet consectetur. Faucibus enim elementum amet in augue aenean quis mauris. Pulvinar quis nibh sit magna nec.',
  createdAt: '2024-04-07T14:16:47.178Z',
  deleted: false,
  images: [
    {
      thumb: 'image-storages/thumb-159ebf47-52e6-4295-80ae-703cbcd512cf.webp',
      url: 'image-storages/159ebf47-52e6-4295-80ae-703cbcd512cf.webp',
      width: 630,
      height: 630,
      sizes: [],
      _id: '661e996ad1e46f4d67758bd0',
    },
    {
      thumb: 'image-storages/thumb-1dc26b21-edfa-4d96-a752-66a5de436c82.jpg',
      url: 'image-storages/1dc26b21-edfa-4d96-a752-66a5de436c82.jpg',
      width: 1536,
      height: 2048,
      sizes: [],
      _id: '661e996ad1e46f4d67758bd1',
    },
    {
      thumb: 'image-storages/thumb-af7e1d53-0c48-4459-81d8-9d395fd5c4d2.jpg',
      url: 'image-storages/af7e1d53-0c48-4459-81d8-9d395fd5c4d2.jpg',
      width: 720,
      height: 874,
      sizes: [],
      _id: '661e996ad1e46f4d67758bd2',
    },
  ],
  report: {
    count: 3,
  },
  secureSpacePath: ['65e9e6ec107f306bb3f00160'],
  title: 'Testing',
  updatedAt: '2024-04-16T15:29:46.457Z',
  user: {
    fullName: 'Angel Labrada',
    avatar: {
      thumb: 'image-storage/thumb-b30c351e-02ff-46f7-a95f-ead37d25c169.jpg',
      url: 'image-storage/b30c351e-02ff-46f7-a95f-ead37d25c169.jpg',
      width: 513,
      height: 640,
      sizes: [],
      _id: '661459f97bf970b2bc15d341',
    },
    _id: '65fb2a938cbf22158e042b8f',
  },
  vote: 4,
  visible: true,
  status: 'PENDING',
};
