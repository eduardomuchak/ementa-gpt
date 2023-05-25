import { backendApi } from "@/lib/axios";

export async function postUploadArquivoTXT(
  payload: any
): Promise<{ status: number; data: any }> {
  const { status, data } = await backendApi.post(`/create-summary`, payload);
  return { status, data };
}
