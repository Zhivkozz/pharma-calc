export default function ContributorsPage() {
    const contributors = [
        { name: 'Ava Patel', role: 'Bug fixing and UI polish' },
        { name: 'Noah Kim', role: 'Improvement suggestions and feedback' },
        { name: 'Sara Gomez', role: 'Community testing and validation' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Honorable Contributors</p>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Pharma Calculator is a community-driven project. Every bug report, improvement suggestion, feature request, and piece of feedback helps make it a better tool for pharmaceutical students and professionals. We are grateful to everyone who has supported its development.
                    </p>
                    <h1 className="text-4xl font-bold text-gray-800 mt-6">People supporting the project</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contributors.map((contributor) => (
                        <div key={contributor.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <div className="text-4xl mb-3 text-center">🌟</div>
                            <h2 className="text-xl font-semibold text-gray-800 text-center">{contributor.name}</h2>
                            <p className="text-sm text-gray-600 mt-2 text-center">{contributor.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
