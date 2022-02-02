import React, { useRef } from 'react'

interface LinkURLProps {
  url: string;
  children: string;
}


export const LinkURL: React.FC<LinkURLProps> = ({ url, children }: LinkURLProps) => {
  return (
    <a
      href={url} target='_blank' rel="noopener noreferrer"
      className='hover:underline text-[rgb(30,30,30)] font-medium transition-all'
    >
      {children}
    </a>
  )
}

interface TitleProps {
  children: string;
  className?: string;
  ref?: typeof useRef | any;

}

export const Title: React.FC<TitleProps> = ({ children, className, ref }: TitleProps) => {
  if (!className) {
    className = 'text-3xl md:text-[50px] font-semibold disable-select text-[rgb(110,110,110)]'
  }

  return (
    <h1 className={className} ref={ref}>{children}</h1>
  )
}

interface ParagraphProps {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  lineHeight?: number;
  ref?: typeof useRef | any;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className, lineHeight, ref }: ParagraphProps) => {
  if (!lineHeight) lineHeight = 1.4
  if (!className) className = 'text-[rgb(70,70,70)] text-sm md:text-[20px] font-normal'

  return (
    <p style={{ lineHeight }} className={className} ref={ref}>
      {children}
    </p>
  )
}