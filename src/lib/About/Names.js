//from wikidata:
/*
#Most eponymous mathematicians
SELECT ?eponym ?eponymLabel ?count ?sampleLabel ?eponymDescription
WHERE
{
  {
  SELECT ?eponym (COUNT(?item) as ?count) (SAMPLE(?item) AS ?sample) 
  WHERE
  {
    ?item wdt:P138 ?eponym.
    ?eponym wdt:P106 wd:Q170790.
  }
  GROUP BY ?eponym
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY DESC(?count)
LIMIT 12
*/
export const names = [
	{
		eponym: 'http://www.wikidata.org/entity/Q131117',
		eponymLabel: 'Maria Montessori',
		count: '631',
		sampleLabel: 'Montessori education',
		eponymDescription: 'Italian pedagogue, philosopher and physician'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q937',
		eponymLabel: 'Albert Einstein',
		count: '184',
		sampleLabel: 'L479806',
		eponymDescription:
			'German-born theoretical physicist; developer of the theory of relativity (1879–1955)'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q762',
		eponymLabel: 'Leonardo da Vinci',
		count: '115',
		sampleLabel: 'Leonardo da Vinci–Fiumicino Airport',
		eponymDescription: 'Italian Renaissance polymath (1452-1519)'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q6722',
		eponymLabel: 'Carl Friedrich Gauss',
		count: '110',
		sampleLabel: 'Gaussian elimination',
		eponymDescription: 'German mathematician and physicist'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q41688',
		eponymLabel: 'Hendrik Lorentz',
		count: '107',
		sampleLabel: 'Lorentz force',
		eponymDescription: 'Dutch physicist'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q307',
		eponymLabel: 'Galileo Galilei',
		count: '104',
		sampleLabel: 'Galileo',
		eponymDescription: 'Italian mathematician, physicist, philosopher and astronomer'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q619',
		eponymLabel: 'Nicolaus Copernicus',
		count: '97',
		sampleLabel: 'L479819',
		eponymDescription:
			'Renaissance-era mathematician, astronomer, and clergyman who formulated the heliocentric model of the Universe'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q7604',
		eponymLabel: 'Leonhard Euler',
		count: '87',
		sampleLabel: 'e',
		eponymDescription: 'Swiss mathematician'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q935',
		eponymLabel: 'Isaac Newton',
		count: '76',
		sampleLabel: 'classical mechanics',
		eponymDescription: 'British physicist and mathematician'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q41585',
		eponymLabel: 'David Hilbert',
		count: '63',
		sampleLabel: 'Hilbert space',
		eponymDescription: 'German mathematician'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q58720',
		eponymLabel: 'Mikhail Vassilyevich Lomonosov',
		count: '55',
		sampleLabel: 'Moscow State University',
		eponymDescription: 'Russian polymath (1711-1765)'
	},
	{
		eponym: 'http://www.wikidata.org/entity/Q173746',
		eponymLabel: 'Paul Erdős',
		count: '55',
		sampleLabel: 'Erdős number',
		eponymDescription: 'Hungarian mathematician (1913–1996)'
	}
].map((v) => ({
	...v,
	name: v.eponymLabel,
	first: v.eponymLabel.slice(0, 1).toUpperCase(),
	last: v.eponymLabel.split(' ').slice(-1)[0].slice(0, 1).toUpperCase()
}));
