type headingProps = {
    title: string;
    description: string;
}

const Heading = ({ title, description }: headingProps) => {
    return (
        <div className="flex justify-between bg-indigo-900 text-white mb-8 w-full p-4">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export { Heading };