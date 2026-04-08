import suneilaImage from "figma:asset/56e3a70f9923c7aafaa9f6ef1a7f2f06ab021c93.png";
import claudiaImage from "figma:asset/112a216849b9752ec9446d7eaaac3b83be7e504e.png";
import member3Image from "figma:asset/0151d44b824da5af6b2609327d49fb41fad703b4.png";
import member4Image from "figma:asset/77584b62874c3cf4369e0b04a50244c4569988ea.png";

const members = [
    {
        name: 'Suneila [ultimo nome]',
        role: 'Directora Executiva (CEO) Triónica Moçambique',
        avatar: suneilaImage,
        link: '#',
    },
    {
        name: 'Cláudia [last name and position needed]',
        role: 'Triónica Moçambique',
        avatar: claudiaImage,
        link: '#',
    },
    {
        name: '[full name and position needed]',
        role: '',
        avatar: member3Image,
        link: '#',
    },
    {
        name: '[full name and position needed]',
        role: '',
        avatar: member4Image,
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Equipa</span>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold sm:text-4xl">Nossa equipa</h2>
                            <p className="mt-4 text-muted-foreground">Estamos ao lado dos nossos clientes desde o primeiro contacto até ao suporte contínuo, assegurando fiabilidade e segurança operacional.</p>
                        </div>
                        <div>
                            <p>A nossa equipa técnica é formada por especialistas treinados em Moçambique e no estrangeiro, garantindo:</p>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                                <li>Instalação completa dos equipamentos</li>
                                <li>Treinamento para uso adequado</li>
                                <li>Assistência pós-venda em todo o país</li>
                                <li>Serviços de manutenção, diagnóstico e calibração</li>
                                <li>Fornecimento de peças de reposição de alta qualidade</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top md:grayscale transition-all duration-500 md:hover:grayscale-0 md:group-hover:h-[22.5rem] md:group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 md:group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block md:translate-y-6 text-sm md:opacity-0 transition duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}