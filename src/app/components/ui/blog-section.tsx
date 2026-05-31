import React from 'react';
import { LazyImage } from './lazy-image';
import { getImageUrl } from '../../utils/images';

const blogs = [
	{
		title: 'Melhoria da Qualidade da Água no País',
		slug: '#',
		description:
			'Decorreu nos dias 02 a 13 do passado mês de Abril, na sala Pemba do Hotel Tivoli, na Cidade de Maputo, a formação sobre uso dos Kits de Análise de…',
		image: getImageUrl('wp-content/uploads/2019/04/1.jpg'),
		createdAt: 'April 2, 2019',
		author: 'admin',
		readTime: '5 min',
	},
	{
		title: 'Equipamentos Laboratoriais de Qualidade',
		slug: '#',
		description:
			'Fornecemos equipamentos de laboratório de alta qualidade para diversas áreas, incluindo ensino, saúde, águas e ambiente...',
		image: getImageUrl('wp-content/uploads/2019/04/1.jpg'),
		createdAt: 'March 15, 2019',
		author: 'admin',
		readTime: '7 min',
	},
	{
		title: 'Soluções Inovadoras para Laboratórios',
		slug: '#',
		description:
			'Apresentamos as mais recentes tecnologias...',
		image: getImageUrl('wp-content/uploads/2019/04/1.jpg'),
		createdAt: 'March 20, 2019',
		author: 'admin',
		readTime: '6 min',
	},
	{
		title: 'Equipamentos para Ensino Superior',
		slug: '#',
		description:
			'Fornecemos equipamentos didáticos de ponta...',
		image: getImageUrl('wp-content/uploads/2019/04/1.jpg'),
		createdAt: 'February 28, 2019',
		author: 'admin',
		readTime: '5 min',
	},
];

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-7xl grow">
			<div
				aria-hidden
				className="absolute inset-0 isolate contain-strict -z-10 opacity-60"
			>
				<div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
			</div>
			<div className="space-y-1 px-4 py-8">
				<h1 className="font-mono text-4xl font-bold tracking-wide">
					Blog
				</h1>
				<p className="text-muted-foreground text-base">
					Descubra as últimas novidades e insights sobre equipamentos laboratoriais, tecnologia e soluções inovadoras.
				</p>
			</div>
			<div className="absolute inset-x-0 h-px w-full border-b border-dashed" />
			<div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
				{blogs.map((blog) => (
					<a
						href={blog.slug}
						key={blog.title}
						className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
					>
						<LazyImage
							src={blog.image}
							fallback="https://placehold.co/640x360?text=fallback-image"
							inView={true}
							alt={blog.title}
							ratio={16 / 9}
							className="transition-all duration-500 group-hover:scale-105"
						/>
						<div className="space-y-2 px-2 pb-2">
							<div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
								<p>por {blog.author}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.createdAt}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.readTime}</p>
							</div>
							<h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
								{blog.title}
							</h2>
							<p className="text-muted-foreground line-clamp-3 text-sm">
								{blog.description}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}