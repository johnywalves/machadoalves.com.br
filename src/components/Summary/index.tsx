import { useMemo } from 'react'

import Link from 'next/link'

import {
  SummaryWrapper,
  SummaryTop,
  SummaryAuthor,
  SummaryIcon,
  SummaryTitle,
  SummaryUpdates,
  SummarySummary,
  SummaryKeepReading
} from './styles'

export interface SummaryProps {
  slug: string
  title: string
  summary: string
  published: string
  modified: string
  showAuthor?: boolean
  author: { name: string; slug: string; profile: string }
}

const Summary = ({
  slug,
  title,
  summary,
  published,
  modified,
  showAuthor = false,
  author: { name: nameAuthor, slug: slugAuthor, profile: profileAuthor }
}: SummaryProps) => {
  const updateDescription = useMemo(() => {
    return `Publicado <strong>${published}</strong> e editado <strong>${modified}</strong>`
  }, [published, modified])

  return (
    <SummaryWrapper>
      <SummaryTop>
        <div>
          <SummaryTitle>{title}</SummaryTitle>
          <SummaryUpdates
            dangerouslySetInnerHTML={{ __html: updateDescription }}
          />
        </div>
        {showAuthor && (
          <Link href={slugAuthor} passHref>
            <SummaryAuthor>
              <p>{nameAuthor}</p>
              <SummaryIcon profile={profileAuthor} />
            </SummaryAuthor>
          </Link>
        )}
      </SummaryTop>
      <SummarySummary>{summary}</SummarySummary>
      <SummaryKeepReading>
        <Link href={slug}>continuar lendo</Link>
      </SummaryKeepReading>
    </SummaryWrapper>
  )
}

export default Summary
