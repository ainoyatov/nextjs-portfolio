import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Aki, a web developer, tech lead, and the founder of Gravity Elements, where I craft intuitive user experiences. When I'm not leading teams, you'll find me building passion projects that push my creativity.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
