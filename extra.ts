// Import custom types
import { NextRequest } from "next/server";
import ShipEngine from "shipengine";
import { Address, Package } from "./type";

export async function POST(req: NextRequest) {
  const {
    shipeToAddress,
    parcels,
  }: { shipeToAddress: Address; parcels: Package[] } = await req.json();
  const shipengine = new ShipEngine({
    apiKey: "TEST_yYxucvlYC/GyN3SONgztlR+UnYb4gfL4KHHM96ywSI0",
  });

  try {
    // if (!shipeToAddress || !packages) {
    //   return new Response(
    //     JSON.stringify({ error: "Missing required fields" }),
    //     { status: 400 }
    //   );
    // }
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipeToAddress,
        shipFrom: {
          name: "Recipient Name", // Replace with the recipient's name
          phone: "+92 300 1234567", // Replace with the recipient's phone number
          addressLine1: "Aiwan-e-Sadar", // Shortened to fit within 35 characters
          addressLine2: "Civil Lines", // Additional details moved to Address Line 2
          cityLocality: "Karachi",
          stateProvince: "Sindh",
          postalCode: "75580",
          countryCode: "PK",
          addressResidentialIndicator: "yes",
        },
        packages: parcels,
      },
      rateOptions: {
        carrierIds: ["se-233105", "se-233106", "se-233107", "se-233139"],
        // serviceCodes: ["ups_ground"],
      },
    });
    console.log(shipeToAddress, parcels, shipmentDetails);
    return new Response(JSON.stringify({ shipeToAddress, parcels , shipmentDetails}), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}