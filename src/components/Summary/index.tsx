import { useMemo } from 'react'

import Link from 'next/link'

import * as S from './styles'

export interface SummaryProps {
  slug: string
  title: string
  summary: string
  published: string
  modified: string
  author: { name: string; slug: string }
}

const Summary = ({
  slug,
  title,
  summary,
  published,
  modified,
  author: { name: nameAuthor, slug: slugAuthor }
}: SummaryProps) => {
  const updateDescription = useMemo(() => {
    return `Publicado <strong>${published}</strong> e editado <strong>${modified}</strong>`
  }, [published, modified])

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
        <Link href={`/${slugAuthor}/${slug}`}>continuar lendo</Link>
      </S.KeepReading>
    </S.Wrapper>
  )
}

export default Summary
