import rq from '../src/request';

export default {
  async getPlaces() {
    const result = await rq.get('/places');
    return result;
  },

  async createPlace(url, data){
    return await rq.post(url, data);
  },

  async deletePlace(url, data){
    return await rq.delete(url, data);
  }
}
