import { AxiosInstance } from "axios";

const ENDPOINT = 'user/';

export default (instance: AxiosInstance) => {
  const create = async (): Promise<void> => {
    await instance.post(ENDPOINT, {
      "nickname": "viniciusteixeiradias",
      "name": "Vinicius Teixeira Dias",
      "picture": "https://avatars.githubusercontent.com/u/69281620?v=4",
      "updated_at": "2023-11-28T02:45:34.855Z",
      "sub": "github|69281620"
    });
  };

  return {
    create
  }
}
