import { remark } from 'remark'
import html from 'remark-html'

export default async (markdown: string) => {
  return (await remark().use(html).process(markdown)).toString()
}
