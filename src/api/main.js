import { $axios } from "@/plugins/axios";

class GraphQLApi {
  static request(data) {
    return $axios.post("", data);
  }
}

export { GraphQLApi };
