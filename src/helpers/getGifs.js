export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZZBJ0C44PMD25P24sLUKEbOiffbp8RNt&q=${ category }&limit=5`
    const search = await fetch(url)
    const { data } = await search.json()

    console.log("data", data)

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    console.log("gifs", gifs)
    return gifs;
}