export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  }

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-widest text-stone-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-stone-500">
          {description}
        </p>
      )}
    </div>
  )
}
