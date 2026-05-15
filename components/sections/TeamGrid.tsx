import SectionHeader from '../ui/SectionHeader';
import PlaceholderFlag from '../ui/PlaceholderFlag';

export default function TeamGrid() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader 
          eyebrow="Our Medical Team"
          title="Expertise You Can Trust."
          description="Meet the dedicated professionals bringing world-class healthcare to your home."
          centered
          className="mb-16"
        />

        <PlaceholderFlag label="Team / Staff" />

        <div className="grid md:grid-cols-3 gap-8 opacity-50 pointer-events-none">
          {/* Skeleton cards for layout demonstration */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-bone border border-gray-200 no-radius p-6">
              <div className="w-full aspect-square bg-gray-200 mb-6"></div>
              <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-1/2 mb-4"></div>
              <div className="h-20 bg-gray-200 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
