import { Client } from "@gradio/client";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    // console.log(prompt)

    const client = await Client.connect("rahul-shrivastav/neuralpy-demo");
    const result = await client.predict("/predict", { prompt });
    // console.log(result)
    return Response.json({ data: result.data });
  } catch (error) {
    console.error("Prediction error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
