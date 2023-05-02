export interface UploadFile {
  id: string;
  fileName: string;
  file: any;
  status: boolean;
  data: any;
}

export function createUploadFile(params: Partial<UploadFile>) {
  return {
    id: params.data.name,
    fileName: params.data.name,
  } as UploadFile;
}
