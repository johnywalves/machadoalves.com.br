import { useMemo } from 'react'

import Link from 'next/link'

import * as S from './styles'

export interface SummaryProps {
  title: string
  summary: string
  slug: string
  author: { name: string; slug: string }
  publicationDate: string
  modificationDate: string
}

const Summary = ({
  title,
  summary,
  slug,
  publicationDate,
  modificationDate,
  author: { name: nameAuthor, slug: slugAuthor }
}: SummaryProps) => {
  const updateDescription = useMemo(() => {
    return `Publicado <strong>${publicationDate}</strong> e editado <strong>${modificationDate}</strong>`
  }, [publicationDate, modificationDate])

  return (
    <S.Wrapper>
      <S.Top>
        <div>
          <S.Title>{title}</S.Title>
          <S.Updates dangerouslySetInnerHTML={{ __html: updateDescription }} />
        </div>
        <Link href={slugAuthor} passHref>
          <S.Author>
            <p>{nameAuthor}</p>
            <S.Icon />
          </S.Author>
        </Link>
      </S.Top>
      <S.Summary>{summary}</S.Summary>
      <S.KeepReading>
        {console.log('slug', slug)}
        <Link href={slug}>continuar lendo</Link>
      </S.KeepReading>
    </S.Wrapper>
  )
}

export default Summary
