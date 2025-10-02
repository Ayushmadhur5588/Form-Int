import { NextResponse } from "next/server"

/**
 * API Route Handler for submitting lead data to ServiceNow
 * This server-side endpoint handles the form submission to avoid CORS issues
 */
export async function POST(request: Request) {
  try {
    // Parse the incoming form data
    const formData = await request.json()

    // ServiceNow API endpoint
    const serviceNowUrl =
      "https://bangmetricllcdemo2.service-now.com/api/sn_lead_mgmt_core/leads_integration/create_record"

    // Make the request to ServiceNow API
    const response = await fetch(serviceNowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`ServiceNow API error: ${response.status}`)
    }

    // Parse the response from ServiceNow
    const data = await response.json()

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data,
      },
      { status: 200 },
    )
  } catch (error) {
    // Handle any errors
    console.error("Error submitting to ServiceNow:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again.",
      },
      { status: 500 },
    )
  }
}
