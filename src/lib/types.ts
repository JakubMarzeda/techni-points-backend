interface IEndpointResponseBase
{
  success: boolean;
}

interface ISuccessResponse<T = any> extends IEndpointResponseBase
{
  success: true;
  data?: T;
}

interface IErrorResponse extends IEndpointResponseBase
{
  success: false;
  error: string;
}

export type TEndpointResponse<T = any> = ISuccessResponse<T> | IErrorResponse;