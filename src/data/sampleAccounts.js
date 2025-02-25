// Sample account data for the prototype
export const sampleAccounts = [
  {
    "id": "0003456789",
    "type": "Create",
    "entity": "Animal",
    "metadata": ["Placeholder1", "Placeholder2", "Placeholder3"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Northern Forest" },
          { "label": "Specialty", "value": "Hibernate" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Riverbank" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0009876543",
    "type": "Blast",
    "entity": "Tree",
    "metadata": ["PlaceX", "DataY"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Rainforest" },
          { "label": "Specialty", "value": "Photosynthesis" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Desert" },
          { "label": "Specialty", "value": "Deep Roots" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0001234567",
    "type": "Boost",
    "entity": "Bird",
    "metadata": ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "High Altitude" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Mountain Peak" },
          { "label": "Specialty", "value": "Rapid Dive" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "Nesting soon." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0004871293",
    "type": "Create",
    "entity": "Animal",
    "metadata": ["Woodland", "Mammal", "Nocturnal"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Temperate Forest" },
          { "label": "Specialty", "value": "Burrowing" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Tends to be active at dawn and dusk." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Forest Edge" },
          { "label": "Specialty", "value": "Tracking" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0005927418",
    "type": "Blast",
    "entity": "Fungus",
    "metadata": ["Decomposer", "Exotic", "Medicinal"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Fallen Log" },
          { "label": "Specialty", "value": "Bioluminescence" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Glows in the dark with a blue-green light." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Laboratory" },
          { "label": "Specialty", "value": "Antibiotic Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Clinical trials showing promising results." }
        ]
      }
    ],
    "completedDate": "2025-02-10T14:32:19.547Z"
  },
  {
    "id": "0006283745",
    "type": "Boost",
    "entity": "Tree",
    "metadata": ["Evergreen", "Coniferous", "Mountain"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Alpine Range" },
          { "label": "Specialty", "value": "Cold Resistance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Can withstand temperatures down to -40°C." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Tree Line" },
          { "label": "Specialty", "value": "Wind Resistance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Adapted to high altitude storms." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0007396214",
    "type": "Create",
    "entity": "Bird",
    "metadata": ["Migratory", "Raptor", "Endangered"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Coastal Cliffs" },
          { "label": "Specialty", "value": "Diving" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Can dive at speeds of over 200 mph." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0008573921",
    "type": "Blast",
    "entity": "Animal",
    "metadata": ["Aquatic", "Mammal", "Social"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Coastal Waters" },
          { "label": "Specialty", "value": "Echolocation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Lives in pods of 10-30 individuals." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Deep Ocean" },
          { "label": "Specialty", "value": "Pressure Adaptation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Can dive to depths of 1000m." }
        ]
      }
    ],
    "completedDate": "2025-02-15T09:17:43.211Z"
  },
  {
    "id": "0009147582",
    "type": "Boost",
    "entity": "Fungus",
    "metadata": ["Symbiotic", "Nutrient", "Soil"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Forest Floor" },
          { "label": "Specialty", "value": "Mycorrhizal Network" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "exotic"]
          },
          { "label": "Comment", "value": "Forms symbiotic relationships with tree roots." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Agricultural Field" },
          { "label": "Specialty", "value": "Nitrogen Fixation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Enhances crop yields by 30%." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0010582937",
    "type": "Create",
    "entity": "Tree",
    "metadata": ["Deciduous", "Hardwood", "Ornamental"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Urban Park" },
          { "label": "Specialty", "value": "Autumn Colors" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Leaves turn bright red in fall." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-18T16:05:32.789Z"
  },
  {
    "id": "0011472936",
    "type": "Blast",
    "entity": "Bird",
    "metadata": ["Tropical", "Vocal", "Colorful"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Jungle Canopy" },
          { "label": "Specialty", "value": "Mimicry" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic", "spicy"]
          },
          { "label": "Comment", "value": "Can imitate over 50 different sounds." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Aviary" },
          { "label": "Specialty", "value": "Language Learning" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Vocabulary of over 100 human words." }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0012693847",
    "type": "Boost",
    "entity": "Animal",
    "metadata": ["Desert", "Nocturnal", "Burrower"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Arid Plains" },
          { "label": "Specialty", "value": "Water Conservation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Can survive without drinking water for months." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Dry Riverbed" },
          { "label": "Specialty", "value": "Heat Resistance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy"]
          },
          { "label": "Comment", "value": "Active during midday heat up to 50°C." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-12T11:28:54.367Z"
  },
  {
    "id": "0013857461",
    "type": "Create",
    "entity": "Fungus",
    "metadata": ["Underground", "Network", "Colony"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Old Growth Forest" },
          { "label": "Specialty", "value": "Massive Growth" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Single organism spreads over 2.4 miles." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0014956372",
    "type": "Blast",
    "entity": "Tree",
    "metadata": ["Fruiting", "Tropical", "Shade"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Orchard" },
          { "label": "Specialty", "value": "Fruit Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "spicy"]
          },
          { "label": "Comment", "value": "Yields over 500 fruits per season." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Agricultural Zone" },
          { "label": "Specialty", "value": "Drought Resistance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Can produce fruit with minimal irrigation." }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0015784623",
    "type": "Boost",
    "entity": "Bird",
    "metadata": ["Arctic", "Migratory", "Wading"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Tundra" },
          { "label": "Specialty", "value": "Insulation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Feathers provide extreme cold protection." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Seasonal Wetlands" },
          { "label": "Specialty", "value": "Navigation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Migrates over 8,000 miles annually." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-19T08:42:16.533Z"
  },
  {
    "id": "0016492751",
    "type": "Create",
    "entity": "Animal",
    "metadata": ["Marine", "Deep Sea", "Bioluminescent"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Abyssal Zone" },
          { "label": "Specialty", "value": "Light Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Creates complex light patterns to communicate." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0017365891",
    "type": "Blast",
    "entity": "Fungus",
    "metadata": ["Culinary", "Cultivated", "Gourmet"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Forest Edge" },
          { "label": "Specialty", "value": "Rapid Growth" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Doubles in size every 48 hours." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Controlled Environment" },
          { "label": "Specialty", "value": "Flavor Enhancement" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Used by top chefs worldwide." }
        ]
      }
    ],
    "completedDate": "2025-02-14T15:37:28.974Z"
  },
  {
    "id": "0018274591",
    "type": "Boost",
    "entity": "Tree",
    "metadata": ["Ancient", "Sacred", "Protected"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Mountain Temple" },
          { "label": "Specialty", "value": "Longevity" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Estimated to be over 2,000 years old." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Conservation Area" },
          { "label": "Specialty", "value": "Seed Viability" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Seeds can remain dormant for centuries." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0019683742",
    "type": "Create",
    "entity": "Bird",
    "metadata": ["Flightless", "Island", "Endemic"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Remote Archipelago" },
          { "label": "Specialty", "value": "Terrestrial Adaptation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Lost flight capability over evolutionary time." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-21T14:19:57.824Z"
  },
  {
    "id": "0020574839",
    "type": "Blast",
    "entity": "Animal",
    "metadata": ["Social", "Tool User", "Intelligent"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Mixed Forest" },
          { "label": "Specialty", "value": "Problem Solving" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Can use multiple tools in sequence." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Research Facility" },
          { "label": "Specialty", "value": "Sign Language" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Communicates with over 500 signs." }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0021468973",
    "type": "Boost",
    "entity": "Fungus",
    "metadata": ["Pathogenic", "Resilient", "Adaptive"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Tree Bark" },
          { "label": "Specialty", "value": "Host Invasion" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy"]
          },
          { "label": "Comment", "value": "Can penetrate healthy plant tissue." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Research Lab" },
          { "label": "Specialty", "value": "Enzyme Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Produces compounds useful in industrial processes." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-17T09:53:41.692Z"
  },
  {
    "id": "0022759836",
    "type": "Create",
    "entity": "Tree",
    "metadata": ["Mangrove", "Coastal", "Filter"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Tidal Zone" },
          { "label": "Specialty", "value": "Salt Tolerance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Filters salt water through specialized roots." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0023461875",
    "type": "Blast",
    "entity": "Bird",
    "metadata": ["Colonial", "Social", "Marine"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Cliff Face" },
          { "label": "Specialty", "value": "Group Nesting" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Nests in colonies of thousands." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Offshore Island" },
          { "label": "Specialty", "value": "Synchronized Fishing" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Hunts in coordinated groups of 50+ birds." }
        ]
      }
    ],
    "completedDate": "2025-02-20T16:48:39.215Z"
  },
  {
    "id": "0024983756",
    "type": "Boost",
    "entity": "Animal",
    "metadata": ["Venomous", "Predator", "Nocturnal"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Tropical Jungle" },
          { "label": "Specialty", "value": "Toxin Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy", "exotic"]
          },
          { "label": "Comment", "value": "Venom contains multiple neurotoxic compounds." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Biomedical Lab" },
          { "label": "Specialty", "value": "Therapeutic Compounds" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Venom components used in pain management." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0025378941",
    "type": "Create",
    "entity": "Fungus",
    "metadata": ["Psychoactive", "Research", "Therapeutic"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Mountain Meadow" },
          { "label": "Specialty", "value": "Compound Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Contains compounds that alter neural activity." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0026849523",
    "type": "Blast",
    "entity": "Tree",
    "metadata": ["Medicinal", "Aromatic", "Tropical"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Rainforest" },
          { "label": "Specialty", "value": "Essential Oil Production" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy", "exotic"]
          },
          { "label": "Comment", "value": "Bark contains multiple therapeutic compounds." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Plantation" },
          { "label": "Specialty", "value": "Oil Concentration" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Produces 3x the standard yield of essential oils." }
        ]
      }
    ],
    "completedDate": "2025-02-13T13:25:08.451Z"
  },
  {
    "id": "0027594618",
    "type": "Boost",
    "entity": "Bird",
    "metadata": ["Cooperative", "Builder", "Social"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Savanna" },
          { "label": "Specialty", "value": "Complex Nests" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Builds multi-chamber community nests." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Urban Environment" },
          { "label": "Specialty", "value": "Material Adaptation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Incorporates human-made materials into nests." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0028654197",
    "type": "Create",
    "entity": "Animal",
    "metadata": ["Amphibious", "Metamorphic", "Resilient"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Freshwater Pond" },
          { "label": "Specialty", "value": "Life Cycle Transition" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "exotic"]
          },
          { "label": "Comment", "value": "Completely changes body structure during development." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-22T10:36:27.189Z"
  },
  {
    "id": "0029485731",
    "type": "Blast",
    "entity": "Fungus",
    "metadata": ["Partner", "Protective", "Agricultural"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Root Zone" },
          { "label": "Specialty", "value": "Plant Protection" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Forms protective barrier around plant roots." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Crop Field" },
          { "label": "Specialty", "value": "Pest Control" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy"]
          },
          { "label": "Comment", "value": "Produces compounds that repel harmful insects." }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0030184956",
    "type": "Boost",
    "entity": "Tree",
    "metadata": ["Pioneer", "Fast Growing", "Soil Builder"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Disturbed Land" },
          { "label": "Specialty", "value": "Rapid Establishment" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "First tree species to colonize cleared areas." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Reclamation Site" },
          { "label": "Specialty", "value": "Soil Restoration" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "bold"]
          },
          { "label": "Comment", "value": "Fixes nitrogen and builds topsoil quickly." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-16T11:29:45.388Z"
  },
  {
    "id": "0031756428",
    "type": "Create",
    "entity": "Bird",
    "metadata": ["Ground Dwelling", "Camouflage", "Desert"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Sandy Plains" },
          { "label": "Specialty", "value": "Cryptic Coloration" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Perfectly matches surrounding sand and rocks." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0032864579",
    "type": "Blast",
    "entity": "Animal",
    "metadata": ["Subterranean", "Colonial", "Specialized"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Underground Network" },
          { "label": "Specialty", "value": "Caste System" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Different individuals have specialized roles." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Complex Tunnel System" },
          { "label": "Specialty", "value": "Engineering" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Creates intricate structures spanning acres." }
        ]
      }
    ],
    "completedDate": "2025-02-11T08:14:32.976Z"
  },
  {
    "id": "0033958471",
    "type": "Boost",
    "entity": "Fungus",
    "metadata": ["Predatory", "Unique", "Micro-Hunter"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Decaying Wood" },
          { "label": "Specialty", "value": "Trapping" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["spicy", "exotic"]
          },
          { "label": "Comment", "value": "Creates microscopic lasso-like structures." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Agricultural Setting" },
          { "label": "Specialty", "value": "Nematode Control" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Used as natural pest management." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0034751928",
    "type": "Create",
    "entity": "Tree",
    "metadata": ["Bonsai", "Cultivation", "Artistic"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Container" },
          { "label": "Specialty", "value": "Miniaturization" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "exotic"]
          },
          { "label": "Comment", "value": "Full-sized tree genetics in miniature form." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-23T15:42:18.634Z"
  },
  {
    "id": "0035687294",
    "type": "Blast",
    "entity": "Bird",
    "metadata": ["Architect", "Artistic", "Selective"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Forest Clearing" },
          { "label": "Specialty", "value": "Display Construction" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Creates elaborate structures to attract mates." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Cultivated Area" },
          { "label": "Specialty", "value": "Color Preference" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Selects specific blue items for display structures." }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0036478519",
    "type": "Boost",
    "entity": "Animal",
    "metadata": ["Resilient", "Extreme", "Microscopic"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Various Environments" },
          { "label": "Specialty", "value": "Cryptobiosis" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Can survive complete dehydration, radiation, and vacuum." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Space Station" },
          { "label": "Specialty", "value": "Radiation Resistance" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Used in experiments for space travel applications." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": "2025-02-09T12:38:54.217Z"
  },
  {
    "id": "0037158642",
    "type": "Create",
    "entity": "Fungus",
    "metadata": ["Mutualistic", "Agricultural", "Farmer"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Underground Chamber" },
          { "label": "Specialty", "value": "Cultivation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild"]
          },
          { "label": "Comment", "value": "Grows and tends to fungal gardens for food." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0038794615",
    "type": "Blast",
    "entity": "Tree",
    "metadata": ["Aquatic", "Floating", "Filtering"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Swamp" },
          { "label": "Specialty", "value": "Floating Roots" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Roots float on water surface, creating habitat." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Water Treatment Facility" },
          { "label": "Specialty", "value": "Bioremediation" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Extracts heavy metals from contaminated water." }
        ]
      }
    ],
    "completedDate": "2025-02-08T14:26:37.891Z"
  },
  {
    "id": "0039285716",
    "type": "Boost",
    "entity": "Bird",
    "metadata": ["Seabird", "Plunging", "Long-Distance"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Open Ocean" },
          { "label": "Specialty", "value": "Fishing Dives" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold"]
          },
          { "label": "Comment", "value": "Dives from 30 meters to catch fish." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "Pelagic Zone" },
          { "label": "Specialty", "value": "Migration" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "spicy"]
          },
          { "label": "Comment", "value": "Travels 40,000 miles annually in figure-eight pattern." }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0040691378",
    "type": "Create",
    "entity": "Animal",
    "metadata": ["Regenerative", "Aquatic", "Invertebrate"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Shallow Reefs" },
          { "label": "Specialty", "value": "Limb Regrowth" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["mild", "exotic"]
          },
          { "label": "Comment", "value": "Can regrow entire arm with full functionality." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      }
    ],
    "completedDate": null
  },
  {
    "id": "0041527894",
    "type": "Blast",
    "entity": "Fungus",
    "metadata": ["Forest", "Giant", "Record"],
    "tabs": [
      {
        "title": "Alive",
        "fields": [
          { "label": "Location", "value": "Old Growth Forest" },
          { "label": "Specialty", "value": "Gigantism" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["bold", "exotic"]
          },
          { "label": "Comment", "value": "Largest organism by area on Earth." }
        ]
      },
      {
        "title": "Boosted",
        "fields": [
          { "label": "Location", "value": "" },
          { "label": "Specialty", "value": "" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": []
          },
          { "label": "Comment", "value": "" }
        ]
      },
      {
        "title": "Blasted",
        "fields": [
          { "label": "Location", "value": "Protected Forest" },
          { "label": "Specialty", "value": "Ecosystem Management" },
          {
            "label": "Flavor",
            "options": ["bold", "mild", "spicy", "exotic"],
            "selected": ["exotic"]
          },
          { "label": "Comment", "value": "Connects hundreds of trees in a nutrient-sharing network." }
        ]
      }
    ],
    "completedDate": "2025-02-07T09:48:14.573Z"
  }
];