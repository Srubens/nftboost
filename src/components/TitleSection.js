function TitleSection({subtitle, title}) {
    return (
        <div className="px-3 mb-8 @desktop:mb-14 space-y-1 @desktop:px-0" >
            <span className="text-sm @desktop:text-xl font-semibold text-white text-opacity-70" >{subtitle}</span>
            <h2 className="font-poppins text-3xl @desktop:text-5xl/tight" >{title}</h2>
        </div>
    );
}

export default TitleSection;