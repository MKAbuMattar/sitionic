import fs from 'fs'
import getPaginationParams from '../utils/getPaginationParams'

export const get = async (req, res, next) => {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const name = fs
      .readFileSync('./src/controllers/name.txt')
      .toString()
      .split('\n')

    const description = fs
      .readFileSync('./src/controllers/description.txt')
      .toString()
      .split('\n')

    const img = fs
      .readFileSync('./src/controllers/img.txt')
      .toString()
      .split('\n')

    const thumbnail = fs
      .readFileSync('./src/controllers/thumbnail.txt')
      .toString()
      .split('\n')

    const resolution = fs
      .readFileSync('./src/controllers/resolution.txt')
      .toString()
      .split('\n')

    const tags = fs
      .readFileSync('./src/controllers/tags.txt')
      .toString()
      .split('\n')

    const result = []

    for (let i in img) {
      result.push({
        name: name[i] || '',
        description: description[i] || '',
        image: img[i] || '',
        thumbnail: thumbnail[i] || '',
        resolution: resolution[i] || '',
        tags: (tags[i] !== '' ? tags[i].split(',') : '') || '',
        no: `${parseInt(i) + 1}` || '',
      })
    }

    const totalCount = result.length
    const totalPages = Math.ceil(result.length / limit)
    const lastItemIndex = limit + skip

    res.status(200).json({
      status: 'ok',
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex > totalCount ? null : lastItemIndex,
      data: result.slice(skip, skip + limit),
    })
  } catch (error) {
    return next(error)
  }
}
