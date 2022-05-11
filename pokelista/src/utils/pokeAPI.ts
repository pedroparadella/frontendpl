import axios from 'axios'

type cachedReq = {
    lifeCycle: number,
    url: string,
    data: string
}

let cache: cachedReq[] = []

export class PokeAPI {
    private url = 'https://pokeapi.co/api/v2/item'

    async getAllItems(offset:number = 0, limit:number = 20) {
        let url = this.url + `?offset=${offset}&limit=${limit}`
        const cached = this.getCacheFromReq(url)
        if (cached) {
            return cached
        }
        else {
            const response = await axios.get(url)
            this.storeReq(this.url, response.data)
            return await response.data
        }
    }

    async getItemByName(name: string = ""){
        console.log("byName")
        const url = `${this.url}/${name}`
        const cached = this.getCacheFromReq(url)
        if (cached) {
            return cached
        }
        else {
            try{
                const response = await axios.get(url)
                this.storeReq(url, response.data)
                return await response.data
            }catch(err){
                return []
            }
        }
    }



    private getCacheFromReq(url: string) {
        const i = cache.findIndex((req: cachedReq) => {
            return req.url === url
        })
        if (cache[i] && cache[i].lifeCycle > Date.now()) {
            return cache[i].data
        } else {
            cache.splice(i, 1);
        }


    }

    private storeReq(url: string, data: any) {
        const newCachedReq: cachedReq = {
            lifeCycle: Date.now() + 3600000,
            url: url,
            data: data
        }
        cache.push(newCachedReq)
    }
}