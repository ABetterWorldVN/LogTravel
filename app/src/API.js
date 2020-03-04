import $rq from '../src/request';

export default {
  async getPlaces() {
    const result = await $rq.get('/places');
    return result;
  }
}
