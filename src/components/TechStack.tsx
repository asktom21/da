const categories = [
  {
    title: 'DBMS',
    color: 'from-blue-500 to-indigo-600',
    items: ['Oracle', 'PostgreSQL', 'MySQL', 'MS SQL Server', 'Tibero', 'MariaDB'],
  },
  {
    title: '모델링 도구',
    color: 'from-emerald-500 to-teal-600',
    items: ['ERwin', 'DA#', 'ER/Studio', 'StarUML', 'ARIS', 'PowerDesigner'],
  },
  {
    title: '데이터 통합',
    color: 'from-purple-500 to-violet-600',
    items: ['Informatica', 'DataStage', 'Apache NiFi', 'Talend', 'Apache Kafka', 'Spark'],
  },
  {
    title: '빅데이터/클라우드',
    color: 'from-orange-500 to-red-600',
    items: ['Hadoop', 'AWS Redshift', 'GCP BigQuery', 'Azure Synapse', 'Snowflake', 'Databricks'],
  },
  {
    title: '데이터 품질/거버넌스',
    color: 'from-cyan-500 to-blue-600',
    items: ['Apache Atlas', 'Collibra', 'Alation', 'dbt', 'Great Expectations', 'Meta Manager'],
  },
  {
    title: 'BI/분석',
    color: 'from-pink-500 to-rose-600',
    items: ['Tableau', 'Power BI', 'Apache Superset', 'Looker', 'MicroStrategy', 'Qlik'],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-hanjin-sky text-hanjin-blue text-sm font-semibold rounded-full mb-4">
            기술 스택
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            지원 가능 기술 스택
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            다양한 데이터 기술 환경에 대한 폭넓은 지원 역량을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${cat.color} px-6 py-4`}>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              {/* Items */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-hanjin-sky hover:text-hanjin-blue hover:border-hanjin-blue/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
